import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import { Container } from '@mui/material';

const indicatorColors = ['#d93025', '#1a73e8', '#188038', '#e37400'];

const Index = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab
          label="General"
          icon={<InboxIcon />}
          style={{ color: indicatorColors[0] }}
        />
        <Tab
          label="Personal"
          icon={<PeopleIcon />}
          style={{ color: indicatorColors[1] }}
        />
        <Tab
          label="Salario"
          icon={<LocalOfferIcon />}
          style={{ color: indicatorColors[2] }}
        />
        <Tab
          label="Imms y Salud"
          icon={<InfoIcon />}
          style={{ color: indicatorColors[3] }}
        />
        <Tab
          label="+ Información"
          icon={<InfoIcon />}
          style={{ color: indicatorColors[3] }}
        />
      </Tabs>

      <Container maxWidth="lg">
        {tabIndex === 1 ? <h1>Personal</h1> : null}
      </Container>
    </>
  );
};

export default Index;
