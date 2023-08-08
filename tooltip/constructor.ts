import { TooltipConfig } from './types';

function create(strs: TooltipConfig[]): string[] {
    const LINES: {[key: number]: string[]} = {
        1: ['']
    };

    strs.forEach((el: TooltipConfig) => {
        const TOOLTIP_VALUE: string = (el.color || '') + el.text;

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

    const RESULT: string[] = new Array(MAX_LINE).fill('');
    return RESULT.map((_, index) => {
        if (Array.isArray(LINES[index + 1])) {
            return LINES[index + 1].join('');
        }
        return ' ';
    });
}

export {
	create
};
