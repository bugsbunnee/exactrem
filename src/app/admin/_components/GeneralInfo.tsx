"use client";

import useCurrencies from "@/hooks/useCurrencies";
import useUsers from "@/hooks/useUsers";
import useNewsletters from "@/hooks/useNewsletters";

import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { FcAbout, FcBusinessman, FcMoneyTransfer } from "react-icons/fc";
import { UserQuery } from "./UserTable";

interface Props {
    searchParams: UserQuery;
}

const GeneralInfo: React.FC<Props> = ({ searchParams }) => {
    const { currencies } = useCurrencies();
    const { subscriptionCount } = useNewsletters(searchParams);
    const { userCount } = useUsers(searchParams);

    const overview = [
        {
            Icon: FcBusinessman,
            title: `${userCount} Registered Users`,
            description: 'This is the total number of users who are registered on the app'
        },
        {
            Icon: FcAbout,
            title: ` ${subscriptionCount} Newsletter subscriptions`,
            description: 'This is the total number of people subscribed to your newsletter'
        },
        {
            Icon: FcMoneyTransfer,
            title: `${Object.values(currencies).length} Active Currencies`,
            description: 'This is the total number of active currencies your have registered'
        }
    ];

    return (
        <Grid columns='3' align='center' gap='8'>
            {overview.map((item, index) => (
                <Flex data-aos="zoom-in-up" data-aos-delay={(index * 500).toString()} key={item.title} className='w-full' align='center' justify='center'>
                    <Box className="border border-stone-200 w-full bg-white text-black dark:text-white dark:bg-[#222] dark:border dark:border-stone-50 rounded-md p-8 min-h-64 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                        <item.Icon size={60} />

                        <Text as='div' size='4' className='font-bold my-6'>
                            {item.title}
                        </Text>
                        
                        <Text as='p' size='2'>
                            {item.description}
                        </Text>
                    </Box>
                </Flex>
            ))}
        </Grid>
     );
}
 
export default GeneralInfo;