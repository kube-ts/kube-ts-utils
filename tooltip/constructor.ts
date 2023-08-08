import { TooltipConfig } from './types';

function create(strs: TooltipConfig[]): string[] {
    const EMPTY_LINE: string = '';
    const LINES: {[key: number]: string[]} = {
        1: [EMPTY_LINE]
    };

    strs.forEach((el: TooltipConfig) => {
        const DECORATION_SUFFIX: string = !Array.isArray(el.decoration) ? EMPTY_LINE : el.decoration.join(EMPTY_LINE);
        const COLOR_SUFFIX: string = el.color || EMPTY_LINE;
        const TOOLTIP_VALUE: string = COLOR_SUFFIX + DECORATION_SUFFIX + el.text;

        if (!el.line) {
            LINES[1].push(TOOLTIP_VALUE);
        } else {
            if (!LINES[el.line]) {
                LINES[el.line] = [];
            }

            LINES[el.line].push(TOOLTIP_VALUE);
        }
    });

    const MAX_LINE: number = Math.max(
        ...Object.keys(LINES).map((line: string) => Number(line))
    );

    const RESULT: string[] = new Array(MAX_LINE).fill(EMPTY_LINE);
    return RESULT.map((_, index) => {
        if (Array.isArray(LINES[index + 1])) {
            return LINES[index + 1].join(EMPTY_LINE);
        }
        return ' ';
    });
}

export {
	create
};
