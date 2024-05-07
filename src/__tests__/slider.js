/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Slider from '../slider';
import '@testing-library/jest-dom';

describe('Slider Component', () => {
  test('renders correctly with default props', () => {
    const { container } = render(<Slider />);
    const slider = container.firstChild;

    expect(slider).toHaveClass('css-gvm8wn-Slider');
    expect(slider).toMatchSnapshot(`
      <div
        className="css-mcm35l"
        onMouseDown={[Function]}
        onTouchStart={[Function]}
      >
        <div
          className="css-c5m0sj"
          style={
            Object {
              "width": "50%",
            }
          }
        />
        <div
          onClick={[Function]}
          onMouseDown={[Function]}
          onTouchStart={[Function]}
          style={
            Object {
              "left": "50%",
              "position": "absolute",
              "top": "50%",
              "transform": "translate(-50%, -50%)",
            }
          }
        >
          <div
            className="css-p9m01q"
          />
        </div>
      </div>
  `);
  });

  test('renders correctly with axis="y"', () => {
    const { container } = render(<Slider axis="y" />);
    const slider = container.firstChild;

    expect(slider).toHaveClass('css-11fxyc7-Slider');
    expect(slider).toMatchSnapshot(`
      <div
        className="css-1munbi2"
        onMouseDown={[Function]}
        onTouchStart={[Function]}
      >
        <div
          className="css-ee7l6q"
          style={
            Object {
              "height": "50%",
            }
          }
        />
        <div
          onClick={[Function]}
          onMouseDown={[Function]}
          onTouchStart={[Function]}
          style={
            Object {
              "left": "50%",
              "position": "absolute",
              "top": "50%",
              "transform": "translate(-50%, -50%)",
            }
          }
        >
          <div
            className="css-p9m01q"
          />
        </div>
      </div>
  `);
  });

  test('renders correctly with axis="xy"', () => {
    const { container } = render(<Slider axis="xy" />);
    const slider = container.firstChild;

    expect(slider).toHaveClass('css-1ed3i9o-Slider');
    expect(slider).toMatchSnapshot(`
    <div
      className="css-1rhaxo2"
      onMouseDown={[Function]}
      onTouchStart={[Function]}
    >
      <div
        className="css-0"
        style={Object {}}
      />
      <div
        onClick={[Function]}
        onMouseDown={[Function]}
        onTouchStart={[Function]}
        style={
          Object {
            "left": "50%",
            "position": "absolute",
            "top": "50%",
            "transform": "translate(-50%, -50%)",
          }
        }
      >
        <div
          className="css-p9m01q"
        />
      </div>
    </div>
  `);
  });
});
