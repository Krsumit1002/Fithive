import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
        <div className='card-container'>
            <div className="card">
                <div className="card__border" />
                <div className="card_title__container">
                    <span className="card_title font-bold text-3xl">
                        🏋️ 1. Smart Workout Tracking</span>
                </div>
                <hr className="line" />
                <div className='text-white'>
                    Say goodbye to messy notebooks and boring spreadsheets. With FitHive, you can log every workout, track reps, sets, and weights, and instantly see your progress. Whether you’re lifting heavy or running long, your performance data is beautifully organized to keep you motivated.
                </div>
            </div>
            <div className="card">
                <div className="card__border" />
                <div className="card_title__container">
                    <span className="card_title font-bold text-3xl">🥗 2. Personalized Meal Planner</span>
                </div>
                <hr className="line" />
                <div className='text-white'>
                    Fitness isn’t just about the gym—it’s about fueling your body the right way. FitHive gives you meal plans tailored to your goals, whether it’s building muscle, losing fat, or just staying healthy. Track calories, balance macros, and even get healthy recipe ideas—all in one place.
                </div>
            </div>
            <div className="card">
                <div className="card__border" />
                <div className="card_title__container">
                    <span className="card_title font-bold text-3xl">📊 3. Progress Dashboard</span>
                </div>
                <hr className="line" />
                <div className='text-white'>
                    Numbers tell your story, and our sleek dashboard makes sure you see it clearly. From weight changes to strength growth and weekly activity summaries, FitHive transforms raw data into powerful insights. Watch your journey unfold with charts that keep you accountable and inspired.
                </div>
            </div>
            <div className="card">
                <div className="card__border" />
                <div className="card_title__container">
                    <span className="card_title font-bold text-3xl">🤝 4. Community & Challenges</span>
                </div>
                <hr className="line" />
                <div className='text-white'>
                    Staying consistent is easier when you’re not alone. FitHive connects you with a thriving fitness community where you can share milestones, join challenges, and cheer each other on. Together, we turn fitness into a lifestyle, not just a routine.
                </div>
            </div>
            <div className="card">
                <div className="card__border" />
                <div className="card_title__container">
                    <span className="card_title font-bold text-3xl">🔔 5. Smart Reminders & Streaks</span>
                </div>
                <hr className="line" />
                <div className='text-white'>
                    We know life gets busy. That’s why FitHive keeps you on track with intelligent reminders for workouts, hydration, meals, and sleep. Plus, streak counters reward your consistency—because small wins lead to big transformations.
                </div>
            </div>
            <div className="card">
                <div className="card__border" />
                <div className="card_title__container">
                    <span className="card_title font-bold text-3xl">📱 6. Cross-Platform Access</span>
                </div>
                <hr className="line" />
                <div className='text-white'>
                    Fitness goes with you everywhere. FitHive is designed to work seamlessly on web and mobile, so your data syncs across devices. Whether you’re in the gym, at home, or traveling, your fitness journey is always in your pocket.
                </div>
            </div>
        </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Default to 1 column on small screens */
    gap: 1rem;
    justify-items: center;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr); /* 3 columns on large screens */
    }
  }
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(266, 92%, 58%);

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    width: 19rem;
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        hsla(240, 15%, 9%, 1) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;

    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(
      0deg,
      hsl(0, 0%, 100%) -50%,
      hsl(0, 0%, 40%) 100%
    );

    border-radius: 1rem;
  }

  .card .card__border::before {
    content: "";
    pointer-events: none;

    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%), rotate(0deg);
    transform-origin: left;

    width: 200%;
    height: 10rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      hsl(277, 95%, 60%) 40%,
      hsl(277, 95%, 60%) 60%,
      hsla(0, 0%, 40%, 0) 100%
    );

    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  .card .card_title__container .card_title {
    font-size: 1rem;
    color: var(--white);
  }

  .card .card_title__container .card_paragraph {
    margin-top: 0.25rem;
    width: 65%;

    font-size: 0.5rem;
    color: var(--paragraph);
  }

  .card .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);

    border: none;
  }

  .card .card__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card .card__list .card__list_item .check {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;
    background-color: var(--primary);

    border-radius: 50%;
  }

  .card .card__list .card__list_item .check .check_svg {
    width: 0.75rem;
    height: 0.75rem;

    fill: var(--black);
  }

  .card .card__list .card__list_item .list_text {
    font-size: 0.75rem;
    color: var(--white);
  }

  .card .button {
    cursor: pointer;

    padding: 0.5rem;
    width: 100%;
    background-image: linear-gradient(
      0deg,
      rgba(94, 58, 238, 1) 0%,
      rgba(197, 107, 240, 1) 100%
    );

    font-size: 0.75rem;
    color: var(--white);

    border: 0;
    border-radius: 9999px;
    box-shadow: inset 0 -2px 25px -4px var(--white);
  }
  @media (min-width: 768px) {
    .card {
      max-width: 19rem; /* Set a max-width for cards within the grid */
    }
  }
`;

export default Card;
