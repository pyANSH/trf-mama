import { Link } from 'phosphor-react';
import { MapPin } from 'phosphor-react';
import React from 'react';
import styled from 'styled-components';
import { appTypography } from '../config/styles';


import { HTMLInputTypeAttribute } from 'react';

export const InputMainContainer = styled.div(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	padding: '0px',
	gap: '8px',
	width: '100%',
	boxSizing: 'border-box',
	position: 'relative',
}));

export const InputTextContainer = styled.div<{
	optional?: boolean;
	isValidLink?: boolean;
	inputType?: 'text' | 'textarea' | 'select' | 'number' | 'email' | 'password' | 'date' | 'time'  | 'link' | 'location',
	selectedOption?: string;
	isInputValid?: boolean;
	isUpperTitleVisible?: boolean;
}>(({ theme, optional, isValidLink, inputType, selectedOption,isInputValid,isUpperTitleVisible }) => ({
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',

	padding: inputType === 'select' ? ((selectedOption ? '4px 12px' : '10px 12px')) :isUpperTitleVisible?'4px 12px': '14px 12px',
	gap: optional ? '8px' : inputType === 'select' ? '8px' : null,
	width: '100%',
	background: theme.app.shades.white,
	border: isInputValid?`0.8px solid ${theme.app.neutral['300']}`:`0.8px solid ${theme.app.error['500']}`,
	borderRadius: '8px',

	...(isValidLink === false && {
		border: `0.8px solid ${theme.app.error['500']}`,
	}) as any,

	...(isValidLink === true && {
		border: `0.8px solid ${theme.app.neutral['300']}`,
	}) as any,

	'&:focus-within': {
		border: isInputValid?`1.4px solid ${theme.app.primary['500']}`:`1.4px solid ${theme.app.error['500']}`,
	},

}));

export const InputInnerContainer = styled.div<{
	inputType: 'text' | 'textarea' | 'select' | 'number' | 'email' | 'password' | 'date' | 'time'  | 'link' | 'location',
}>(({inputType }) => ({
	display: 'flex',
	flexDirection: 'column',
	// justifyContent: 'center',
	alignItems: 'flex-start',
	padding: '0px',
	gap: inputType==='text'?'0px':'2px',
	width: '100%',
	position: 'relative',
	justifyContent: inputType === 'textarea' ? 'flex-start' : 'center',
}));

const InputUpperTitle = styled.div(({ theme }) => ({
	...appTypography.paraXSmall.regular,
	color: theme.app.typography['500'],
}));

export const MainInput = styled.input<{
	inputType: 'text' | 'textarea' | 'select' | 'number' | 'email' | 'password' | 'date' | 'time'  | 'link' | 'location',
	maxLines?: number | null;
	
}>(({ theme, inputType, maxLines}) => ({
	...appTypography.paraSmall.regular,
	color: theme.app.typography['900'],
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start',
	padding: '0px',
	gap: '2px',
	width: '100%',
	outline: 'none',
	border: 'none',
	'&:focus': {
		outline: 'none',
	},
	'&::placeholder': {
		color: theme.app.typography['500'],
	},

	'&:disabled': {
		background: theme.app.shades.white,
		color: theme.app.typography['500'],
	},

	...(inputType === 'textarea' && {
		//? To remove resziable handle , uncomment the below line
		resize: 'none',
		height: maxLines? parseInt(appTypography.paraSmall.regular['line-height']) * maxLines:'115px',
		minHeight: 'min-content',
		minWidth: '100%',
		maxWidth: '100%'
	}),

	'::selection': {
		background: theme.app.primary['500'] + '4d',
		color: theme.app.typography['900']+ 'fa',
	},
}));

export const RightContainer = styled.div(({theme}) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	padding: '0px',
	gap: '4px',
}));

export const HelperContainer = styled.div<{
	helperText?: string | boolean;
	warningText?: string;
	infoText?: string;
}>(({ theme,helperText,warningText,infoText }) => ({
	...appTypography.paraXSmall.regular,
	color: theme.app.typography['700'],
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: (helperText && warningText || helperText && infoText)?'space-between':(helperText)? 'flex-end':'flex-start',
}));

export const HelperText = styled.p(({ theme }) => ({
	...appTypography.paraXSmall.regular,
	color: theme.app.typography['700'],
	textAlign: 'right',
}));

const WarningText = styled(HelperText)<{
	isInputValid?: boolean;
}>(({ theme,isInputValid }) => ({
	color: isInputValid? theme.app.typography['700']:theme.app.error['500'],
}));

export const OptionalText = styled.p(({ theme }) => ({
	...appTypography.paraXSmall.regular,
	color: theme.app.typography['300'],
}));

export const LocationIcon = styled(MapPin)(({ theme }) => ({
	height: '18px',
	width: '18px',
	color: theme.app.decorations.link1,
}));

export const LinkIcon = styled(Link)(({ theme }) => ({
	height: '18px',
	width: '18px',
	color: theme.app.neutral['500'],
}));

type InputComponentTypes = {
	inputType: 'text' | 'textarea' | 'select' | 'number' | 'email' | 'password' | 'date' | 'time'  | 'link' | 'location',
	placeholder: string,
	helperText?: string | boolean,
	optional?: boolean | string,
	prefill?: string,
	value?: string,
	onChange?: (e: any) => void,
	isValidLink?: boolean,
	maxLength?: number,
	handleInputFocus?: (e: any) => void,
	handleInputBlur?: (e: any) => void,
	isInputValid?: boolean,
	isDisabled?: boolean,
	inputTitle?: string,
	warningText?: string,
	infoText?: string,
	maxLines?: number,
}

function InputComponent({
	inputType = 'text',
	placeholder,
	helperText = false,
	optional =false,
	prefill = '',
	value = prefill,
	onChange,
	isValidLink,
	maxLength,
	handleInputFocus,
	handleInputBlur,
	isInputValid = true,
	isDisabled = false,
	inputTitle = placeholder,
	warningText = '',
	infoText = '',
	maxLines,
}: InputComponentTypes) {

	// console.log('isInputValid', isInputValid);
	return (
		<InputMainContainer>
			<InputTextContainer isValidLink={isValidLink || false} isInputValid={(!value || isInputValid) || false} isUpperTitleVisible={((value.length >0) && inputTitle) ? true:false  }>
				<InputInnerContainer inputType={inputType}>
					{(value.length > 0 && inputTitle) && <InputUpperTitle>{inputTitle}</InputUpperTitle>}
					{inputType === 'textarea' ?
						<MainInput
							inputType={inputType}
							as="textarea"
							placeholder={placeholder}
							value={value}
							onChange={onChange}
							maxLength={maxLength}
							maxLines={maxLines}
						/>
						:
						<MainInput
							inputType={inputType}
							placeholder={placeholder}
							value={value}
							onChange={onChange}
							maxLength={maxLength}
							onFocus={handleInputFocus}
							onBlur={handleInputBlur}
							disabled={isDisabled}
						/>
					}
				</InputInnerContainer>
				<RightContainer >
					{optional  && <OptionalText>{optional}</OptionalText>}

					{optional && optional !== 'icon' && <OptionalText>{optional}</OptionalText>}

					{optional === 'icon' ?
						<>
							{inputType === 'link' && <LinkIcon weight="bold" />}
							{inputType === 'location' && <LocationIcon weight="bold" />}
						</>
						: null}

				</RightContainer>
			</InputTextContainer>
			{((helperText !== false) || warningText)  &&
						<HelperContainer warningText={warningText} helperText={helperText || ''} infoText={infoText}>
							{warningText && <WarningText isInputValid={isInputValid}>{warningText ? warningText : null}</WarningText>}
							{
								infoText && <HelperText>{infoText}</HelperText>
							}		
							{helperText &&
								<HelperText>
									{optional === 'icon' ? null : helperText ? `${value?.length}/${(maxLength || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}` : null}
								</HelperText>}
						</HelperContainer>}
		</InputMainContainer>
	);
}




export default React.memo(InputComponent);
