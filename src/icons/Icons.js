import * as React from "react";
import MaterialComIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const DEFAULT_ICON_SIZE = 24

export const BriefcaseIcons = (color, size = DEFAULT_ICON_SIZE) => <MaterialComIcon name="briefcase" color={color} size={size}/>
export const AccountIcon = (color, size = DEFAULT_ICON_SIZE) => <MaterialComIcon name="account" color={color} size={size}/>
export const StatIcon = (color, size = DEFAULT_ICON_SIZE) => <Ionicons name="ios-stats" color={color} size={size}/>
export const SettingIcon = (color, size = DEFAULT_ICON_SIZE) => <Ionicons name="ios-settings" color={color} size={size}/>

