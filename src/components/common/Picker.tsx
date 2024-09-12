'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';

import { Box, Flex, Select, Separator, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

interface Props {
	disabled?: boolean;
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
	options: { label: string; value: string; src: string }[];
}

const Picker: React.FC<Props> = React.forwardRef<HTMLButtonElement, Props>(
	({ onChange, options, disabled, value, placeholder }, ref) => {
		return (
			<Flex direction="column" className="w-full">
				<Select.Root
					disabled={disabled}
					onValueChange={onChange}
					size="3"
					value={value}
				>
					<Select.Trigger
						variant="surface"
						radius="small"
						placeholder={placeholder}
						ref={ref}
						className="text-sm"
					></Select.Trigger>

					<Select.Content position="popper">
						{options.map((option) => (
							<Select.Item
								className="p-2 my-4"
								key={option.value}
								value={option.value}
							>
								<Flex as="span" align="center" className="text-sm" gap="2">
									<Image
										src={option.src}
										alt={option.label}
										width={20}
										height={20}
										className="object-contain rounded-sm"
									/>

									{option.label}
								</Flex>
							</Select.Item>
						))}
					</Select.Content>
				</Select.Root>
			</Flex>
		);
	}
);

Picker.displayName = 'Picker';

export default Picker;
