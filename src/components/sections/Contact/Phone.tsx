import React, { InputHTMLAttributes } from 'react';
import Image from 'next/image';

import { TextField } from '@radix-ui/themes';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Phone = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
	console.log(props);
	return (
		<TextField.Root
			radius="small"
			mt="3"
			variant="soft"
			color="gray"
			size="3"
			ref={ref}
			placeholder={props.placeholder}
			onKeyDown={props.onKeyDown}
			autoComplete={props.autoComplete}
			onChange={props.onChange}
			className="focus:outline-0"
		>
			<TextField.Slot>
				{/* <Image src />
                                                        <EnvelopeClosedIcon height="16" width="16" /> */}
			</TextField.Slot>
		</TextField.Root>
	);
});

export default Phone;
