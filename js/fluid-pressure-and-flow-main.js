// Copyright 2014-2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Sim from '../../../joist/js/Sim.js';
import simLauncher from '../../../joist/js/simLauncher.js';
import Tandem from '../../../tandem/js/Tandem.js';
import fluidPressureAndFlowStrings from '../fluid-pressure-and-flow-strings_ru.json';
import UnderPressureScreen from './under-pressure/UnderPressureScreen.js';
import FlowScreen from './flow/FlowScreen.js';
import WaterTowerScreen from './watertower/WaterTowerScreen.js';

// Create and start the sim
simLauncher.launch( () => {
  const sim = new Sim( fluidPressureAndFlowStrings.FLUID_PRESSURE_AND_FLOW.title, [
    new UnderPressureScreen( Tandem.ROOT.createTandem( 'underPressureScreen' ) ),
    new FlowScreen( Tandem.ROOT.createTandem( 'flowScreen' ) ),
    new WaterTowerScreen( Tandem.ROOT.createTandem( 'waterTowerScreen' ) )
  ], {
    credits: {
      leadDesign: 'PhET Interactive Simulations',
      softwareDevelopment: 'PhET Interactive Simulations',
      team: 'PhET Interactive Simulations',
      qualityAssurance: 'PhET Interactive Simulations',
      graphicArts: 'PhET Interactive Simulations'
    }
  } );

  sim.start();
} );