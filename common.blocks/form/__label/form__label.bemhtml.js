block('form').elem('label')(
    tag()('label'),
    attrs()(function() {
        return {
            'for': this.ctx.for
        };
    })
);
