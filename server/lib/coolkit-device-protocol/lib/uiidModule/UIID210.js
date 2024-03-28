"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIID210_PROTOCOL = void 0;
const constant_1 = require("../constant");
const protocol_1 = require("../protocol");
exports.UIID210_PROTOCOL = {
    uiid: 210,
    initParams: device => {
        const { configure = (0, constant_1.getDefaultStartup)(4, 'off').configure.map(item => {
            return Object.assign(Object.assign({}, item), { enableDelay: 0, width: 500 });
        }), pulses = (0, constant_1.getDefaultInching)(4, 'off').pulses.map(item => {
            return Object.assign(Object.assign({}, item), { switch: 'off' });
        }), switches = (0, constant_1.getDefaultSwitches)(4, 'off').switches, lightSwitch = 'off', lightMode = 0, sledOnline = 'off' } = device.itemData.params;
        return { configure, pulses, switches, lightSwitch, lightMode, sledOnline };
    },
    controlItem: {
        toggle: protocol_1.commonMultiToggle,
        setSledOnline: protocol_1.commonSledOnline,
        setLightSwitch: controlItem => {
            const { lightSwitch = 'off' } = controlItem;
            return {
                lightSwitch
            };
        },
        setLightMode: controlItem => {
            const { colorMode = 0 } = controlItem;
            return {
                lightMode: colorMode
            };
        },
        setMultiInchingMode(controlItem) {
            return (0, protocol_1.commonMultiInching)(controlItem, 1000, 'off');
        },
        setMultiStartup: protocol_1.commonMultiStartup
    }
};
