import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Image, Link, Plus, TextT, X } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ResponsiveConfigs, appTypography } from '../../../../config/styles';
import InputComponent from '../../../../common/InputComponent';

const ModalMainContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: theme.app.shades.white,
  boxShadow: '0px -4px 42px rgba(84, 84, 84, 0.03)',
  borderRadius: '24px',
  zIndex: 202,
  cursor: 'default',

  width: '584px',
  maxWidth: '630px',
  maxHeight: `calc(95% - 2*${ResponsiveConfigs.dashboardHeaderHeight})`,
  boxSizing: 'border-box',

  overflow: 'hidden',
}));

const Backdrop = styled.div(({ theme }) => ({
  position: 'fixed',
  height: '100%',
  width: '100%',
  top: '50%',
  left: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  background: theme.app.neutral['500'],
  opacity: 0.3,

  zIndex: 201,
}));

const ModalHeader = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 24px',
  gap: '10px',
  width: '100%',
  background: theme.app.shades.white,
  borderBottom: `0.4px solid ${theme.app.neutral[100]}`,
  borderRadius: '24px 24px 0px 0px',
  boxSizing: 'border-box',
}));

const CloseBTN = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '4px',
  padding: '10px 16px',
  cursor: 'pointer',
  borderRadius: '44px',
}));

const CloseBTNText = styled.p(({ theme }) => ({
  ...appTypography.paraSmall.regular,
  color: theme.app.typography['700'],
}));

const X_Icon = styled(X)`
  color: ${({ theme }) => theme.app.neutral['800']};
  height: 20px;
  width: 20px;
`;

const ModalContent = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '16px 44px 8px 44px',
  gap: '24px',
  background: theme.app.shades.white,
  width: '100%',
  height: '100%',
  boxShadow: '0px -4px 42px rgba(84, 84, 84, 0.03)',
  boxSizing: 'border-box',
  position: 'relative',
  overflowY: 'scroll',
}));

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

const Title = styled.p(({ theme }) => ({
  ...appTypography.paraLarge.regular,
  color: theme.app.typography[900],
}));

const BTNCommon = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 16px',
  gap: '4px',
  borderRadius: '100px',
  border: 'none',
  cursor: 'pointer',
  width: '240px',
  outline: 'none',
};

const SaveBTN = styled.button<{ isValid?: boolean; isLoading?: boolean }>(
  ({ theme, isValid, isLoading }) => ({
    ...(BTNCommon as any),
    ...(appTypography.paraSmall.regular as any),
    padding: isLoading ? '3.5px 16px' : '10px 16px',
    color: !isValid ? theme.app.typography[300] : theme.app.shades.white,
    background: !isValid ? theme.app.neutral[100] : theme.app.neutral[900],
  }),
);

const FooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 16px;
  width: 100%;
  background: ${({ theme }) => theme.app.shades.white};
  border-top: 0.4px solid ${({ theme }) => theme.app.neutral[300]};
  border-radius: 0px 0px 24px 24px;
  z-index: 1;
  /* position: absolute; */
  /* bottom: 0px; */
`;

const DragText = styled.p(({ theme }) => ({
  ...appTypography.paraXSmall.regular,
  color: theme.app.typography[700],
  flexDirection: 'row',
  display: 'flex',
  gap: '4px',
  cursor: 'pointer',
}));

const ModalContentInfoText = styled.p(({ theme }) => ({
  ...appTypography.paraSmall.regular,
  color: theme.app.neutral[700],
  width: '100%',
  boxSizing: 'border-box',
}));

const CommonBTN = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '8px 16px',
  borderRadius: '8px',
  cursor: 'pointer',

  gap: '8px',

  background: theme.app.shades.white,

  border: 'none',
  outline: 'none',
}));

const MenuBTN = styled(CommonBTN)<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    ...appTypography.paraSmall.regular,
    color: isSelected ? theme.app.primary[500] : theme.app.typography[700],
    padding: '10px 16px',
    borderRadius: '100px',

    border: isSelected
      ? `0.8px solid ${theme.app.primary[500]}`
      : `0.8px solid ${theme.app.neutral[300]}`,

    background: isSelected ? theme.app.primary[50] : theme.app.shades.white,

    width: '100%',
    boxSizing: 'border-box',
  }),
);

const ImageIcon = styled(Image)<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    color: isSelected ? theme.app.primary[500] : theme.app.neutral[800],
  }),
);
const TextIcon = styled(TextT)<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    color: isSelected ? theme.app.primary[500] : theme.app.neutral[800],
  }),
);
const PlusIcon = styled(Plus)<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    color: isSelected ? theme.app.primary[500] : theme.app.neutral[800],
  }),
);

const MenuBTNText = styled.p<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    ...appTypography.paraSmall.regular,
    color: isSelected ? theme.app.primary[500] : theme.app.typography[700],
  }),
);

const LinkIconMod = styled(Link)(({ theme }) => ({
  color: theme.app.neutral[500],
  cursor: 'pointer',
}));

const InputTextContainer = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
  flexDirection: 'column',
  paddingBlockEnd: '24px',
}));

type Prop = {
  link: string;
};
function RightContainerComponent(props: Prop) {
  const { link } = props;
  function openUrlInNewTab() {
    window.open(link, '_blank');
  }

  return (
    <>{<LinkIconMod onClick={openUrlInNewTab} weight="bold" size={18} />}</>
  );
}

type HelpCentreModalProps = {
  setIsHelpModalOpen: any;
};

function HelpCentreModal(props: HelpCentreModalProps) {
  const { setIsHelpModalOpen } = props;
  const dispatch = useDispatch();

  const containerRef = useRef();

  const [isDragging, setIsDragging] = useState(false);
  const [isConfirmCloseModalOpen, setIsConfirmCloseModalOpen] = useState(false);

  function handleCloseModal() {
    setIsHelpModalOpen(false);
  }

  const [helpTitle, setHelpTitle] = useState('');
  const [helpDescription, setHelpDescription] = useState('');

  return (
    <>
      <Backdrop onClick={handleCloseModal} />

      <ModalMainContainer>
        <ModalHeader>
          <RightContainer>
            <Title>{'Add Support Ticket'}</Title>
          </RightContainer>

          <CloseBTN onClick={handleCloseModal}>
            <X_Icon weight="duotone" />
            {/* <CloseBTNText>{''}</CloseBTNText> */}
          </CloseBTN>
        </ModalHeader>

        <ModalContent>
          {
            <>
              <ModalContentInfoText>
                {
                  'Cards appear on the right panel of community. Only a maximum of two cards can be created at the same time.'
                }
              </ModalContentInfoText>

              <InputComponent
                value={helpTitle}
                onChange={(e: any) => {
                  setHelpTitle(e.target.value);
                }}
                inputType={'text'}
                placeholder={'Title'}
                maxLength={50}
                helperText={true}
                // prefill={editSectionData?.title}
              />

              <InputComponent
                value={helpDescription}
                onChange={(e: any) => {
                  setHelpDescription(e.target.value);
                }}
                inputType={'text'}
                placeholder={'Description'}
                maxLength={5000}
                helperText={true}
                maxLines={6}
              />
            </>
          }
        </ModalContent>

        <FooterContainer>
          <SaveBTN>{'Save Changes'}</SaveBTN>
        </FooterContainer>
      </ModalMainContainer>
    </>
  );
}

RightContainerComponent.propTypes = {
  link: PropTypes.string,
};

export default HelpCentreModal;
