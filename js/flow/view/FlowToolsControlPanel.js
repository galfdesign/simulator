// Copyright 2014-2025, University of Colorado Boulder

/**
 * Control panel that contains various tools (ruler, flux meter).
 *
 * @author Siddhartha Chinthapally (ActualConcepts)
 */

import { Node, VBox, HBox, Text, Rectangle, Color } from '../../../scenery/js/imports.js';
import { Slider } from '../../../sun/js/imports.js';
import fluidPressureAndFlowStrings from '../../fluid-pressure-and-flow-strings_ru.json';

class FlowToolsControlPanel extends Node {
  constructor(model) {
    super();

    // Создаем контейнер панели
    const panel = new Rectangle(0, 0, 300, 400, {
      fill: new Color('#FFFFFF'),
      stroke: '#000000',
      lineWidth: 1,
      cornerRadius: 10
    });

    // Создаем заголовок панели
    const title = new Text(fluidPressureAndFlowStrings.FLUID_PRESSURE_AND_FLOW.flow.pipeControls, {
      font: 'bold 18px Arial',
      fill: '#000000'
    });

    // Создаем слайдеры управления
    const flowRateSlider = new Slider({
      min: 0,
      max: 100,
      value: model.flowRate,
      label: fluidPressureAndFlowStrings.FLUID_PRESSURE_AND_FLOW.flow.flowRate,
      labelFont: '14px Arial',
      valueFont: '14px Arial',
      trackFill: '#2196F3',
      thumbFill: '#1976D2'
    });

    const pressureSlider = new Slider({
      min: 0,
      max: 100,
      value: model.pressure,
      label: fluidPressureAndFlowStrings.FLUID_PRESSURE_AND_FLOW.flow.pressure,
      labelFont: '14px Arial',
      valueFont: '14px Arial',
      trackFill: '#F44336',
      thumbFill: '#D32F2F'
    });

    const velocitySlider = new Slider({
      min: 0,
      max: 100,
      value: model.velocity,
      label: fluidPressureAndFlowStrings.FLUID_PRESSURE_AND_FLOW.flow.velocity,
      labelFont: '14px Arial',
      valueFont: '14px Arial',
      trackFill: '#4CAF50',
      thumbFill: '#388E3C'
    });

    // Создаем макет панели
    const layout = new VBox({
      children: [
        title,
        flowRateSlider,
        pressureSlider,
        velocitySlider
      ],
      spacing: 15,
      align: 'left',
      padding: 20
    });

    // Добавляем все элементы на панель
    this.addChild(panel);
    this.addChild(layout);

    // Центрируем макет в панели
    layout.center = panel.center;
  }
}

export default FlowToolsControlPanel;