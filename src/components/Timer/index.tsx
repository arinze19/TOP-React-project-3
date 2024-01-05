import { useState, useEffect, useMemo } from 'react';

import moment from 'moment';

import styled from 'styled-components';

import { TIME_LIMIT } from '../../constants';

import { type StoreState } from '../../types';

// types
interface TimerProps {
  level: number;
  modal: string;
  onChange: (data: Partial<StoreState>) => void;
}

const Timer = ({ level, modal, onChange }: TimerProps) => {
  const [time, setTime] = useState(TIME_LIMIT);

  // Every Second deduct one
  useEffect(() => {
    const timerId = setInterval(() => {
      // set time to time - 1
      setTime((prev) => {
        // if modal is === game_over return
        if (modal === 'game_over') return prev;

        // if time is 0, game over
        if (prev === 0) {
          /**
           * display modal
           */
          onChange({ modal: 'game_over' });
          /**
           * stop the timer
           */
          return 0;
        }

        // decrement time
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timerId);
  }, [modal]);

  // on level change, add some more seconds to the timer
  useEffect(() => {
    setTime((time + level) * 2);
  }, [level]);

  // when time is 0, game over
  const formatted_time = useMemo(() => {
    // Create a duration object
    const duration = moment.duration(time, 'seconds');

    // Format the duration as "HH:mm"
    return moment.utc(duration.asMilliseconds()).format('mm:ss');
  }, [time]);

  return (
    <TimerContainer>
      <strong>{formatted_time}</strong>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-radius: 4px;
  background-color: #ffd50074;
  border: 1px solid #ffd500;
  padding: 0.5rem 1rem;
`;

export default Timer;
