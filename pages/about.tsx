import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import Link from '../components/Link';
import WorkExperienceCard from '../components/WorkExperienceCard';
import workExperience from '../data/workExperience';
import projects from '../data/projects';
import AboutSection from '../components/AboutSection';
import fadeInUp from '../animations/fadeInUp';

const StyledApp = styled(motion.div)`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Verdana', 'san serif';
  display: flex;
  flex-direction: column;
  background-color: #6c757d;
`;

const StyledPage = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex: 1;
`;

const StyledMenuIcon = styled.div`
  position: fixed;
  top: 50%;
  left: 0.5%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledContainer = styled(Paper)`
  && {
    background-color: #343a40;
  }
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const StyledAbout = styled.div`
  padding: 2em;
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const StyledTabs = styled((props) => <Tabs {...props} classes={{ indicator: 'indicator' }} />)`
  && .indicator {
    background-color: #FFF;
  }
`;
interface TabPanelProps {
  children: React.ReactNode;
  index: unknown;
  value: unknown;
}

const TabPanel = (props: TabPanelProps) => {
  const {
    children, value, index,
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const About: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Head>
        <title>About | Michael Lee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <StyledApp
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
        >
          <NavBar />
          <StyledMenuIcon>
            <IconButton component={Link} href="/">
              <CancelIcon style={{ fill: 'white' }} />
            </IconButton>
          </StyledMenuIcon>
          <StyledPage>
            <StyledContainer>
              <AppBar position="static">
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                >
                  <Tab label="Work Experience" />
                  <Tab label="Side Projects" />
                </StyledTabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <motion.div variants={fadeInUp}>
                  <Grid
                    container
                    spacing={3}
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                  >
                    {workExperience.map((experience) => (
                      <Grid item key={workExperience.indexOf(experience)}>
                        <WorkExperienceCard
                          imageUrl={experience.imageUrl}
                          company={experience.company}
                          jobTitle={experience.jobTitle}
                          location={experience.location}
                          dateRange={experience.dateRange}
                          description={experience.description}
                          achievements={experience.achievements}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <motion.div variants={fadeInUp}>
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    {projects.map((project) => (
                      <Grid item xs={12} sm={6} md={4} key={projects.indexOf(project)}>
                        <ProjectCard
                          title={project.title}
                          codeUrl={project.codeUrl}
                          modalInfo={project.modalInfo}
                          cardInfo={project.cardInfo}
                          webAppInfo={project.webAppInfo}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </TabPanel>
              <StyledAbout>
                <AboutSection />
              </StyledAbout>
            </StyledContainer>
          </StyledPage>
        </StyledApp>
      </main>
    </div>
  );
};
export default About;
