import React from 'react';
import { Badge } from '@material-ui/core';

const BadgeWrapper = ({ children, badgeContent, badgeColor, isVisibleBadge }) => (
    isVisibleBadge
        ? (
            <Badge badgeContent={badgeContent} color={badgeColor}>
                {children}
            </Badge>
        )
        : children
);

export default BadgeWrapper;
