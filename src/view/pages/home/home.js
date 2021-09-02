import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Main from '../main/main';

export default function Home() {
  return (
      <Switch>
        <Route path='/' component={Main}/>
      </Switch>
  );
}
