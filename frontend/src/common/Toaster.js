import React from 'react'
import styled, { keyframes } from 'styled-components';
import { appTypography } from '../config/styles';
import { useDispatch } from 'react-redux';

const Container = styled.div(() => ({
	padding: '12px 24px',
}));
const Content = styled.div(() => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	padding: '0px',
	gap: '20px',
	justifyContent: 'space-between',
}));
const Text = styled.div(({ theme }) => ({
	...appTypography.paraMed.regular,
	color: theme.app.typography['700'],
}));
const CrossIcon = styled.div(() => ({

}));
const linearAnimation = keyframes`
0%{
	width:0px
}
100%{
	width:401px
}
`;
const MainContainer = styled.div(({ theme, show }) => ({
	position: 'fixed',
	background: theme.app.primary['100'],
	border: `2px solid ${theme.app.primary['500']}`,
	// boxShadow: '0px 25px 50px -12px rgba(16, 24, 40, 0.25)', //0px is x-axis, 25 is y-axis, 50 is blur, -12 is spread
	boxShadow: '0px 20px 25px -5px rgba(16, 24, 40, 0.10)', //0px 20px 25px -5px rgb(16 24 40 / 10%)
	borderRadius: '44px',
	transform: 'translateX(-50%)',
	left: '50%',
	top: '70px',
	zIndex: 9999,
	display: show ? 'block' : 'none',
	maxWidth: '430px'
}));
function Toaster() {
    const showToast = useSelector(state => state.appData.toast);
	const dispatch = useDispatch();
	useIsomorphicLayoutEffect(() => {
		let timer;
		if (showToast?.isVisible) {
			timer = setTimeout(() => {
				dispatch(combinedActions.removeToast());
			}, showToast?.timer || 3000);
		}
		return () => { clearTimeout(timer); };
	}, [showToast]);


	return (
		<MainContainer show={showToast?.isVisible || false}>
			<Container>
				<Content>
					<Text>{(showToast?.text) || (isWhiteLabel ? 'An error occurred, please try again later' : 'This option is yet not avaiable yet!! We will add it soon.Till then you can use Wylo mobile app to use it')}</Text>
				</Content>
			</Container>

		</MainContainer>
	);
}

export default Toaster