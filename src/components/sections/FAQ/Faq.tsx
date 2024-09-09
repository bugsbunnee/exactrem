import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';

import Conditional from '@/components/common/Conditional';
import FaqSkeleton from '@/components/sections/FAQ/FaqSkeleton';

import useDictionary from '@/hooks/useDictionary';

interface FAQOption {
	title: string;
	description: string;
}

const FAQs: React.FC = () => {
	const dictionary = useDictionary();
	const [selectedFAQ, setSelectedFAQ] = useState<FAQOption | null>(null);

	useEffect(() => {
		setSelectedFAQ(dictionary.page.faqs.questions.one);
	}, [dictionary]);

	if (!selectedFAQ) return <FaqSkeleton />;

	return (
		<Conditional isVisible={false}>
			<Heading className="text-center mt-20 mb-10" size="8">
				{dictionary.page.faqs.heading}
			</Heading>

			<Flex justify="center" align="center" className="py-5 px-32">
				<Box className="flex-1 z-40 -mr-20">
					{Object.values(dictionary.page.faqs.questions).map((faq) => {
						const isSelected = faq.title === selectedFAQ!.title;

						return (
							<Button
								key={faq.title}
								onClick={() => setSelectedFAQ(faq)}
								className={classNames({
									'bg-primary text-white': isSelected,
									'bg-white text-black dark:bg-[#222] dark:text-white': !isSelected,
									'flex min-h-20 w-full p-6 shadow-2xl cursor-pointer rounded-xl hover:scale-110 transition-all ease-in-out duration-300': true,
								})}
							>
								<Box
									className={classNames({
										'w-8 h-8 rounded-full': true,
										'bg-white': isSelected,
										'bg-orange-200 dark:bg-gray-100/50': !isSelected,
									})}
								/>

								<Box className="flex-1 text-left ml-3">
									<Text className="text-left font-bold" size="3">
										{faq.title}
									</Text>
								</Box>

								<ChevronRightIcon
									width="30"
									height="30"
									className={classNames({
										'text-white': isSelected,
										'text-orange-600 dark:text-gray-100/50': !isSelected,
									})}
								/>
							</Button>
						);
					})}
				</Box>

				<Box className="flex-1 bg-black dark:bg-white p-20 pl-40 rounded-2xl min-h-[43rem]">
					<Text as="p" size="4" className="leading-9 text-white dark:text-black">
						{selectedFAQ!.description}
					</Text>
				</Box>
			</Flex>
		</Conditional>
	);
};

export default FAQs;
