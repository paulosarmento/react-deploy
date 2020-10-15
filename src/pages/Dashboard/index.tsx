import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
  Appointment,
  Section,

} from './styles';

const Dashboard: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src={user.avatar_url}
              alt={user.name}
            />
            <div>
              <span> Bem Vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
            <span></span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir </strong>
            <div>
              <img
              src="https://avatars3.githubusercontent.com/u/50329834?s=460&u=005e9ebeee65bcb94c9f324bb578b6716107687a&v=4"
              alt="Paulo Sarmento"
              />
              <strong>
                Paulo Sarmento
              </strong>
              <span>
              <FiClock />
              08:00
              </span>
            </div>


          </NextAppointment>
          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                src="https://avatars3.githubusercontent.com/u/50329834?s=460&u=005e9ebeee65bcb94c9f324bb578b6716107687a&v=4"
                alt="Paulo Sarmento"
                />
                <strong>
                Paulo Sarmento
                </strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                src="https://avatars3.githubusercontent.com/u/50329834?s=460&u=005e9ebeee65bcb94c9f324bb578b6716107687a&v=4"
                alt="Paulo Sarmento"
                />
                <strong>
                Paulo Sarmento
                </strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                src="https://avatars3.githubusercontent.com/u/50329834?s=460&u=005e9ebeee65bcb94c9f324bb578b6716107687a&v=4"
                alt="Paulo Sarmento"
                />
                <strong>
                Paulo Sarmento
                </strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                src="https://avatars3.githubusercontent.com/u/50329834?s=460&u=005e9ebeee65bcb94c9f324bb578b6716107687a&v=4"
                alt="Paulo Sarmento"
                />
                <strong>
                Paulo Sarmento
                </strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
