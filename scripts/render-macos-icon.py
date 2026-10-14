import os
from PIL import Image, ImageDraw, ImageFilter

def generate_macos_icon(src_path, out_path):
    src = Image.open(src_path).convert('RGBA')

    # macOS Big Sur+ Human Interface Guidelines:
    # Canvas: 1024x1024
    # Squircle Body: 824x824 placed at (100, 100)
    # Corner Radius: 185px continuous curvature
    # Shadows: Ambient soft shadow + contact directional shadow underneath

    body_content = src.resize((824, 824), Image.Resampling.LANCZOS)

    # 4x supersampling for ultra smooth antialiased squircle corners
    ss_scale = 4
    ss_w, ss_h = 824 * ss_scale, 824 * ss_scale
    ss_mask = Image.new('L', (ss_w, ss_h), 0)
    ss_draw = ImageDraw.Draw(ss_mask)
    radius = int(185 * ss_scale)
    ss_draw.rounded_rectangle([(0, 0), (ss_w - 1, ss_h - 1)], radius=radius, fill=255)
    body_mask = ss_mask.resize((824, 824), Image.Resampling.LANCZOS)

    body_icon = Image.new('RGBA', (824, 824), (0, 0, 0, 0))
    body_icon.paste(body_content, (0, 0), mask=body_mask)

    # Subtle inset border stroke highlight
    ss_stroke = Image.new('RGBA', (ss_w, ss_h), (0, 0, 0, 0))
    ss_stroke_draw = ImageDraw.Draw(ss_stroke)
    stroke_width = int(2 * ss_scale)
    ss_stroke_draw.rounded_rectangle(
        [(stroke_width // 2, stroke_width // 2), (ss_w - 1 - stroke_width // 2, ss_h - 1 - stroke_width // 2)],
        radius=radius,
        outline=(255, 255, 255, 35),
        width=stroke_width
    )
    stroke_icon = ss_stroke.resize((824, 824), Image.Resampling.LANCZOS)
    body_icon.alpha_composite(stroke_icon)

    master = Image.new('RGBA', (1024, 1024), (0, 0, 0, 0))

    # Ambient shadow (diffuse downward blur)
    shadow_mask = Image.new('L', (1024, 1024), 0)
    shadow_mask.paste(body_mask, (100, 108))
    ambient_shadow = shadow_mask.filter(ImageFilter.GaussianBlur(radius=24))
    ambient_layer = Image.new('RGBA', (1024, 1024), (0, 0, 0, 0))
    for y in range(1024):
        for x in range(1024):
            a = ambient_shadow.getpixel((x, y))
            if a > 0:
                ambient_layer.putpixel((x, y), (0, 0, 0, int(a * 0.35)))

    # Contact shadow (crisp base blur)
    contact_mask = Image.new('L', (1024, 1024), 0)
    contact_mask.paste(body_mask, (100, 104))
    contact_shadow = contact_mask.filter(ImageFilter.GaussianBlur(radius=8))
    contact_layer = Image.new('RGBA', (1024, 1024), (0, 0, 0, 0))
    for y in range(1024):
        for x in range(1024):
            a = contact_shadow.getpixel((x, y))
            if a > 0:
                contact_layer.putpixel((x, y), (0, 0, 0, int(a * 0.25)))

    master.alpha_composite(ambient_layer)
    master.alpha_composite(contact_layer)
    master.alpha_composite(body_icon, (100, 100))

    master.save(out_path, format='PNG')
    print(f'Rendered authentic macOS icon: {out_path}')

if __name__ == '__main__':
    import sys
    src = sys.argv[1] if len(sys.argv) > 1 else 'src/assets/icons/grok-mascot-source.png'
    out = sys.argv[2] if len(sys.argv) > 2 else 'src/assets/icons/icon-1024.png'
    generate_macos_icon(src, out)
