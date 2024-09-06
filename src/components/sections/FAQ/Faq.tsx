import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes';

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
		<>
			<Heading className="text-center mt-20 mb-10" size="8">
				{dictionary.page.faqs.heading}
			</Heading>

			<Flex justify="center" align="center" className="p-5">
				<Box className="flex-1 z-50 -mr-20 pl-32">
					{Object.values(dictionary.page.faqs.questions).map((faq) => {
						const isSelected = faq.title === selectedFAQ!.title;

						return (
							<Button
								key={faq.title}
								onClick={() => setSelectedFAQ(faq)}
								className={classNames({
									'bg-sky-50': isSelected,
									'bg-white dark:bg-[#222]': !isSelected,
									'flex min-h-20 w-full p-6 shadow-2xl cursor-pointer rounded-xl hover:scale-110 transition-all ease-in-out duration-300':
										true,
								})}
							>
								<Box
									className={classNames({
										'w-8 h-8 rounded-full': true,
										'bg-sky-700': isSelected,
										'bg-sky-100 dark:bg-gray-100/50': !isSelected,
									})}
								/>

								<Box className="flex-1 text-left ml-3">
									<Text className="text-left font-bold text-gray-900" size="3">
										{faq.title}
									</Text>
								</Box>

								<ChevronRightIcon
									width="30"
									height="30"
									className={classNames({
										'text-sky-700': isSelected,
										'text-sky-100 dark:text-gray-100/50': !isSelected,
									})}
								/>
							</Button>
						);
					})}
				</Box>

				<Box className="flex-1 bg-gray-100 dark:bg-[#222] p-20 pl-40 rounded-2xl h-[43rem]">
					<Text as="p" size="4" className="leading-9">
						{selectedFAQ!.description}
					</Text>
				</Box>
			</Flex>
		</>
	);
};

export default FAQs;
