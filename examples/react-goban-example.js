import React from 'react';
import ReactDom from 'react-dom';

import { GoGame, ReactGoban, goGameReducer, actions } from '../src';

let game = new GoGame();
game = goGameReducer(game, actions.playMove(3, 3));
game = goGameReducer(game, actions.playMove(16, 16));
game = goGameReducer(game, actions.playMove(19, 19));


ReactDom.render(<ReactGoban board={game.board} />, document.getElementById('app'));
