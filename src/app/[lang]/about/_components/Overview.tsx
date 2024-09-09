"use client";

import React from 'react';
import CountUp from 'react-countup';

import { Box, Container, Flex, Grid, Text } from '@radix-ui/themes';

import useDictionary from '@/hooks/useDictionary';

const Overview: React.FC = () => {
    const dictionary = useDictionary();

    const overviewData = [
        {
            start: 0,
            end: 3000,
            label: dictionary.page.overview.global_clients,
            duration: 10,
        },
        {
            start: 0,
            end: 4,
            label: dictionary.page.overview.payout_countries,
            duration: 20,
        },
        {
            start: 0,
            end: 3,
            label: dictionary.page.overview.supported_currencies,
            duration: 30,
        },
        {
            start: 0,
            end: 1000000,
            prefix: '$',
            label: dictionary.page.overview.processed_payments,
            duration: 10,
        },
    ];

	return (
		<section className="p-20">
			<Container>
				<Grid
					columns="4"
					gap="1"
					align="center"
					justify="center"
				>
					{overviewData.map((item) => (
                        <Flex align='center' key={item.label} justify='center'>
                            <Box className='text-center'>
                                <CountUp
                                    className='text-4xl font-bold'
                                    start={item.start}
                                    end={item.end}
                                    prefix={item.prefix}
                                    duration={item.duration}
                                    separator=','
                                    suffix='+'
                                />

                                <Text as='p' className='mt-3' size='4'>{item.label}</Text>
                            </Box>
                        </Flex>
                    ))}
				</Grid>
			</Container>
		</section>
	);
};

export default Overview;
