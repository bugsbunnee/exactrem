import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';

import { NavItem } from '@/utils/models';
import { Box, Separator } from '@radix-ui/themes';

import Conditional from '@/components/common/Conditional';
import NavOption from './NavOption';

import useRouteMatch from '@/hooks/useRouteMatch';

interface Props {
    navItem: NavItem;
    showSeparator: boolean;
}

const MobileNavOption: React.FC<Props> = ({ navItem, showSeparator }) => {
    const { isRouteMatch } = useRouteMatch(navItem.options, navItem.route);

    return ( 
        <React.Fragment key={navItem.label} >
            <Box>
                <Box>
                    <Link 
                        href={navItem.route} 
                        className={classNames({
                            "uppercase text-sm hover:text-primary": true,
                            "text-primary": isRouteMatch,
                        })}>
                            {navItem.label}
                    </Link>
                </Box>

                <Box>
                    {navItem.options.map((option) => (
                        <Box className="mt-4" key={option.title}>
                            <NavOption navOption={option} />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Conditional isVisible={showSeparator}>
                <Separator size="4" className="my-4" />
            </Conditional>
        </React.Fragment>
     );
}
 
export default MobileNavOption;