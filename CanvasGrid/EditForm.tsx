import * as React from 'react';
import { useState } from 'react';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: 'Calendar' };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};
export const EditForm = (props: any) => {
    const { entityData, backButtonClicked, context } = props;
    const [email, setEmail] = useState(entityData?.getValue("emailaddress1"))
    const [fullname, setFullname] = useState(entityData?.getValue("fullname"))
    console.log({ entityData });
    const onChangeEmail = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        setEmail(newValue)
    }
    const onChangeFullname = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        setFullname(newValue)
    }
    const saveClicked = (): void => {
        console.log("emal: " + email + " fullanme: " + fullname)
        var data = {
            fullname: fullname,
            emailaddress1: email
        }
        context.webAPI.updateRecord("contact", entityData.getRecordId(), data);
    }
    return <Stack horizontal tokens={stackTokens} styles={stackStyles}>
        <Stack {...columnProps}>
            <DefaultButton text="Go Back" onClick={backButtonClicked} allowDisabledFocus />
            <PrimaryButton text="Save" onClick={saveClicked} />
            <TextField label="Email" value={email} onChange={onChangeEmail} />
            <TextField label="Fullname" value={fullname} onChange={onChangeFullname} />
        </Stack>
        <Stack {...columnProps}>
        </Stack>
    </Stack>
}


