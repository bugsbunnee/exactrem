import React from "react";
import Image from "next/image";
import ErrorMessage from "../common/ErrorMessage";

import { Control, Controller } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Box, Text, TextField } from "@radix-ui/themes";
import { MobileIcon } from "@radix-ui/react-icons";

import { CountryOption } from "@/utils/models";


interface Props {
    name: string;
    label: string;
    control: Control;
    selectedCountry?: CountryOption;
    errorMessage?: string;
    onSetError: (errorMessage?: string) => void;
    onSetValue: (value: string) => void;
}

const PhoneInput: React.FC<Props> = ({ control, name, label, selectedCountry, errorMessage, onSetError, onSetValue }) => {
    return ( 
       <Box className="w-full">
            <Text size="2" className="font-bold">
                {label}
            </Text>

            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <TextField.Root
                        disabled={!selectedCountry}
                        radius="small"
                        mt="3"
                        variant="surface"
                        color="gray"
                        size="3"
                        className="focus:outline-0 text-sm"
                        {...field}
                        onChange={(event) => {
                            const phoneNumber = event.target.value;
                            onSetValue(phoneNumber);

                            const isValid = isValidPhoneNumber(phoneNumber, selectedCountry!.cca2);
                            if (isValid) return onSetError(undefined);

                            onSetError('Invalid phone number');
                        }}
                    >
                        <TextField.Slot>
                            {selectedCountry ? (
                                <>
                                    <Image
                                        src={selectedCountry.src}
                                        alt={selectedCountry.label}
                                        width={15}
                                        height={15}
                                        className="object-contain rounded-sm"
                                    />

                                    <Text size="1">
                                        ({selectedCountry.phoneCode})
                                    </Text>
                                </>
                            ) : (
                                <MobileIcon height="16" width="16" />
                            )}
                        </TextField.Slot>
                    </TextField.Root>
                )}
            />

            {errorMessage && (
                <ErrorMessage>
                    {errorMessage}
                </ErrorMessage>
            )}
        </Box> 
     );
}
 
export default PhoneInput;