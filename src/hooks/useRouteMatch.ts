import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

import classNames from "classnames";

import { Locale } from "../../i18n.config";
import { NavItem } from "@/utils/models";

const useRouteMatch = (options: NavItem['options'], route: string) => {
    const pathname = usePathname();
	const router = useRouter();
	const params = useParams<{ lang: Locale; }>();

	const handleClick = useCallback((optionRoute?: string) => {
		router.push(`/${params.lang}/${optionRoute ?? route}`);
	}, [route, router, params.lang]);

    const isRouteMatch = 
                (options.length > 0 && options.find((option) => `/${params.lang}${option.route}` === pathname) )
                || `/${params.lang}${route}` === pathname
	
    const className = useMemo(() => {
		return classNames({
			"cursor-pointer active:bg-stone-50 active:outline-0 hover:bg-primary hover:text-white font-medium px-2 rounded-sm text-sm": true,
			"text-white bg-primary dark:border-stone-100": isRouteMatch,
			"dark:text-black dark:hover:text-white text-white": !isRouteMatch
		});
	}, [isRouteMatch]);

    return { className, handleClick , isRouteMatch };
};

export default useRouteMatch;