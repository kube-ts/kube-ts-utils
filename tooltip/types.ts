import { FieldsConfig } from './config';

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
	[FieldsConfig.color]?: string;

    /**
     * Line.
     */
    [FieldsConfig.line]?: number;

    /**
     * Text decoration.
     */
    [FieldsConfig.decoration]?: string;
}

export {
	TooltipConfig
};
