"use client";
import { Icon } from '@iconify/react';

interface IconWrapperProps {
  icon: string;
  height?: string;
  width?: string;
}

function IconWrapper({ icon, ...props }: IconWrapperProps) {
  return <Icon icon={icon} {...props} />;
}

export default IconWrapper;
