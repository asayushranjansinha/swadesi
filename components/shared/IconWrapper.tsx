"use client";
import { Icon } from '@iconify/react';

// Interface with 'icon' as required and rest as optional
interface IconWrapperProps {
  icon: string;
  [key: string]: any; 
}

function IconWrapper({ icon, ...props }: IconWrapperProps) {
  return <Icon icon={icon} {...props} />;
}

export default IconWrapper;
