import React from 'react';
import styled from 'styled-components';
import { Box } from '../../common/Box';

type Props = {
    imageUrl: string;
    imageDescription: string;
};

const StyledImagePlaceholder = styled(Box)`
    height: 0;
    padding-bottom: 66.67%;
    background: ${(props) => props.theme.colors.silver};
`;

const StyledImage = styled.img`
    width: 100%;
    position: absolute;
    animation: fadeIn 0.3s;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const ImageCover: React.FC<Props> = ({ imageUrl, imageDescription }) => {
    const [ready, setReady] = React.useState<boolean>(false);
    const imageRef = React.useRef<HTMLImageElement | null>(null);

    // Could use a custom hook
    React.useEffect(() => {
        let didCancel = false;
        if (imageUrl) {
            imageRef.current = new Image();
            imageRef.current.src = imageUrl;
            imageRef.current.onload = () => {
                if (!didCancel) {
                    setReady(true);
                }
            };
            return () => {
                if (!imageRef.current) {
                    return;
                }
                didCancel = true;
            };
        }
    }, [imageUrl]);

    return <StyledImagePlaceholder>{ready && <StyledImage src={imageUrl} alt={imageDescription} />}</StyledImagePlaceholder>;
};

export default ImageCover;
