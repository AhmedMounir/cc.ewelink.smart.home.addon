import { IControlDeviceParams } from '../ts/interface/IControlDevice';
import { IDevice } from '../ts/interface/IDevice';
import { TSingleCapability, TMultiCapability, TWifiLight, TSledOnline, TSingleInching, TMultiInching, TSingleStartup, TMultiStartup, TLock, TBackLight, TLightSceneMode, THistoryPower, TCurtain, TRfGateway, TActivePower, TTempUnit, TTargetTemp, TWorkMode, TChildLock, TStopMode, TZled, TSecurityType, TMediaTotal, TSlowly, TLightScene22, TAutoControl, TOperateHistory, TBrightAdjust, TColorTempAdjust, TSensitivity, TDetectedDuration, TStatisticsPower, TWindowSwitch, TempCorrection, TEcoTargetTemp, TTurbo, TLightSwitch, TMotorReverse } from '../ts/type/TControlType';
import { IGroup } from '../ts/interface/IGroup';
export type TInvokeData = IDevice | IGroup;
declare function controlDevice(device: TInvokeData, type: 'toggle', params?: Partial<Pick<IControlDeviceParams, 'outlet' | 'switch'>>): TSingleCapability;
declare function controlDevice(device: TInvokeData, type: 'toggleMulti', params: Pick<IControlDeviceParams, 'outlet' | 'switch'>): TMultiCapability;
declare function controlDevice(device: TInvokeData, type: 'setSledOnline'): TSledOnline;
declare function controlDevice(device: TInvokeData, type: 'setZled'): TZled;
declare function controlDevice(device: TInvokeData, type: 'setSingleInchingMode', params: Pick<IControlDeviceParams, 'pulse' | 'width'>): TSingleInching;
declare function controlDevice(device: TInvokeData, type: 'setMultiInchingMode', params: Pick<IControlDeviceParams, 'pulses'>): TMultiInching;
declare function controlDevice(device: TInvokeData, type: 'setSingleStartup', params: Pick<IControlDeviceParams, 'startup'>): TSingleStartup;
declare function controlDevice(device: TInvokeData, type: 'setMultiStartup', params: Pick<IControlDeviceParams, 'configure'>): TMultiStartup;
declare function controlDevice(device: TInvokeData, type: 'setLock', params: Pick<IControlDeviceParams, 'lock'>): TLock;
declare function controlDevice(device: TInvokeData, type: 'setMultiLock', params: Pick<IControlDeviceParams, 'lock'>): any;
declare function controlDevice(device: TInvokeData, type: 'setTempUnit'): TTempUnit;
declare function controlDevice(device: TInvokeData, type: 'setTargetTemp', params: Pick<IControlDeviceParams, 'targetTemp'>): TTargetTemp;
declare function controlDevice(device: TInvokeData, type: 'setWorkMode', params: Pick<IControlDeviceParams, 'workMode'>): TWorkMode;
declare function controlDevice(device: TInvokeData, type: 'setStopMode', params: Pick<IControlDeviceParams, 'stopMode'>): TStopMode;
declare function controlDevice(device: TInvokeData, type: 'setSecurityType', params: Pick<IControlDeviceParams, 'securityType'>): TSecurityType;
declare function controlDevice(device: TInvokeData, type: 'setAlarmBeeps', params: Pick<IControlDeviceParams, 'fileName' | 'volume' | 'duration' | 'test'>): any;
declare function controlDevice(device: TInvokeData, type: 'setChildLock', params: Pick<IControlDeviceParams, 'childLock'>): TChildLock;
declare function controlDevice(device: TInvokeData, type: 'toggleFan'): TMultiCapability;
declare function controlDevice(device: TInvokeData, type: 'setFanLightMode', params: Pick<IControlDeviceParams, 'fanMode'>): TMultiCapability;
declare function controlDevice(device: TInvokeData, type: 'setMediaAirCondition', params: Pick<IControlDeviceParams, 'wind_speed'> | Pick<IControlDeviceParams, 'wind_swing_ud'> | Pick<IControlDeviceParams, 'wind_swing_lr'> | Pick<IControlDeviceParams, 'mediaMode'>): TMediaTotal;
declare function controlDevice(device: TInvokeData, type: 'setBrightness', params: Pick<IControlDeviceParams, 'brightness'> & Partial<Pick<IControlDeviceParams, 'mode'>>): TWifiLight;
declare function controlDevice(device: TInvokeData, type: 'setColorTemperature', params: Pick<IControlDeviceParams, 'colorTemp'>): TWifiLight;
declare function controlDevice(device: TInvokeData, type: 'setColor', params: Pick<IControlDeviceParams, 'hue'> & Partial<Pick<IControlDeviceParams, 'saturation'>>): TWifiLight;
declare function controlDevice(device: TInvokeData, type: 'setLightMode', params: Pick<IControlDeviceParams, 'colorMode'>): any;
declare function controlDevice(device: TInvokeData, type: 'setLightScene', params: Pick<IControlDeviceParams, 'sceneType'>): TLightSceneMode | TLightScene22;
declare function controlDevice(device: TInvokeData, type: 'setSlowly', params: Pick<IControlDeviceParams, 'slowlyLit'> | Pick<IControlDeviceParams, 'slowlyDimmed'>): TSlowly;
declare function controlDevice(device: TInvokeData, type: 'setToggle', params: Pick<IControlDeviceParams, 'dimming' | 'quickSwitch'>): TSlowly;
declare function controlDevice(device: TInvokeData, type: 'setBrightAdjust', params: Pick<IControlDeviceParams, 'brightAdjust'>): TBrightAdjust;
declare function controlDevice(device: TInvokeData, type: 'setColorTempAdjust', params: Pick<IControlDeviceParams, 'ColourTempAdjust'>): TColorTempAdjust;
declare function controlDevice(device: TInvokeData, type: 'controlCurtain', params: Pick<IControlDeviceParams, 'switch'> | Pick<IControlDeviceParams, 'setclose'>): TCurtain;
declare function controlDevice(device: TInvokeData, type: 'setBackLight', params: Pick<IControlDeviceParams, 'backlight'>): TBackLight;
declare function controlDevice(device: TInvokeData, type: 'controlRfGatewayDevice', params: Pick<IControlDeviceParams, 'rfChl'>): TRfGateway;
declare function controlDevice(device: TInvokeData, type: 'getOncePower', params?: Pick<IControlDeviceParams, 'outlet'>): THistoryPower;
declare function controlDevice(device: TInvokeData, type: 'getHistoryPower', params?: Pick<IControlDeviceParams, 'outlet'> | Pick<IControlDeviceParams, 'start' | 'end'>): THistoryPower;
declare function controlDevice(device: TInvokeData, type: 'refreshPowerInfo', params?: Pick<IControlDeviceParams, 'outlet'>): TActivePower;
declare function controlDevice(device: TInvokeData, type: 'statisticsPower'): TStatisticsPower;
declare function controlDevice(device: TInvokeData, type: 'statisticsPower', params: {
    oneKwh: 'start';
    startTime: string;
}): TStatisticsPower;
declare function controlDevice(device: TInvokeData, type: 'statisticsPower', params: {
    oneKwh: 'end';
    startTime: string;
    endTime: string;
}): TStatisticsPower;
declare function controlDevice(device: TInvokeData, type: 'statisticsPower', params: Pick<IControlDeviceParams, 'startTime' | 'outlet'>): TStatisticsPower;
declare function controlDevice(device: TInvokeData, type: 'statisticsPower', params: Pick<IControlDeviceParams, 'startTime' | 'endTime' | 'outlet'>): TStatisticsPower;
declare function controlDevice(device: TInvokeData, type: 'autoControl'): TAutoControl;
declare function controlDevice(device: TInvokeData, type: 'getOperateHistory', params?: Pick<IControlDeviceParams, 'rangeStart' | 'rangeEnd'>): TOperateHistory;
declare function controlDevice(device: TInvokeData, type: 'setSensitivity', params?: Pick<IControlDeviceParams, 'sensitivity'>): TSensitivity;
declare function controlDevice(device: TInvokeData, type: 'setDetectedDuration', params?: Pick<IControlDeviceParams, 'duration'>): TDetectedDuration;
declare function controlDevice(device: TInvokeData, type: 'setWindowSwitch', params: Pick<IControlDeviceParams, 'windowSwitch'>): TWindowSwitch;
declare function controlDevice(device: TInvokeData, type: 'setTempCorrection', params: Pick<IControlDeviceParams, 'tempCorrection'>): TempCorrection;
declare function controlDevice(device: TInvokeData, type: 'setEcoTargetTemperature', params: Pick<IControlDeviceParams, 'targetTemp'>): TEcoTargetTemp;
declare function controlDevice(device: TInvokeData, type: 'setSchedule', params: Pick<IControlDeviceParams, 'scheduleParams'>): any;
declare function controlDevice(device: TInvokeData, type: 'setTurbo', params: Pick<IControlDeviceParams, 'turbo'>): TTurbo;
declare function controlDevice(device: TInvokeData, type: 'setLightSwitch', params: Pick<IControlDeviceParams, 'lightSwitch'>): TLightSwitch;
declare function controlDevice(device: TInvokeData, type: 'setMotorReverse', params: Pick<IControlDeviceParams, 'motorReverse'>): TMotorReverse;
declare function controlDevice(device: TInvokeData, type: 'setMultiLightControl', params: Partial<Pick<IControlDeviceParams, 'brightness' | 'colorTemp' | 'hue' | 'mode' | 'saturation'>>): any;
export { controlDevice };
