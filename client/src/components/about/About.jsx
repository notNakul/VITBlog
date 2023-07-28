
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">VIT Blog</Typography>
                <Text variant="h5">I'm a Computer Science Student and a passionate developer. <br />Me and my friend build this application for a fun project in 1st quater of 23.
                </Text>
                <Text variant="h5">
                    This is a blog app for the my university where people can post updates about happenings around the campus.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;