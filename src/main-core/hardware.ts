import { invariant } from '../electron-main/errors.js';
export interface HardwarePolicy {storedPreference?:boolean|null;platform:string}
export function hardwareAccelerationEnabled(input:HardwarePolicy):boolean{return input.storedPreference??input.platform==='darwin';}
export function applyHardwareAcceleration(input:HardwarePolicy&{app:{isReady():boolean;disableHardwareAcceleration():void;commandLine:{appendSwitch(name:string):void}}}):boolean {
  invariant(!input.app.isReady(),"The hardware-acceleration policy applied after app ready; Chromium's GPU decision is already fixed.");
  const enabled=hardwareAccelerationEnabled(input);if(!enabled){input.app.disableHardwareAcceleration();input.app.commandLine.appendSwitch('disable-gpu');}return enabled;
}
export function hardwareAccelerationState(input:HardwarePolicy&{enabledAtLaunch:boolean}):{enabled:boolean;enabledAtLaunch:boolean}{return{enabled:hardwareAccelerationEnabled(input),enabledAtLaunch:input.enabledAtLaunch};}
