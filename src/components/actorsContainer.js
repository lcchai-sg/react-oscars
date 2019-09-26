import React from 'react';
import { Route } from 'react-router-dom';
import Actor from './actor';
import Actors from './actors';
import { ActorList } from '../data/actors';

const ActorContainer = (props) => {
  let actorUrl = ActorList.map((actor) => {
    return (
      <Route path={`/actors/${actor.url}`} render={() => <Actor name={actor.name} details={actor.description} image={actor.profile_img} />} />
    );
  });

  return (
    <React.Fragment>
      <Route exact path="/actors" render={() => <Actors title="Best Actors" />} />
      {actorUrl}
    </React.Fragment>
  );
};

export default ActorContainer;