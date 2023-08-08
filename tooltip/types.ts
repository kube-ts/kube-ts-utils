import { FieldsConfig } from '../configs/tooltip';
import { Color } from './colors';
import { Decoration } from './decorations';

/**
 * Tooltip description.
 */
interface TooltipConfig {

	/**
	 * Tooltip value.
	 */
	[FieldsConfig.text]: string;

	/**
	 * Text color.
	 */
	[FieldsConfig.color]?: Color;

    /**
     * Line.
     */
    [FieldsConfig.line]?: number;

    /**
     * Text decoration.
     */
    [FieldsConfig.decoration]?: Decoration[];
}

export {
	TooltipConfig
};
