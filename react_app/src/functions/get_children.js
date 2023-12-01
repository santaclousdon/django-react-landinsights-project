function get_children(context) {
    const children = [];
    if (context.children !== undefined) {
        // weirdly enough this means more than one child
        if (context.children.length > 0) {
            Object.keys(context.children).forEach((index) => {
                const child = context.children[index];
                if (window.cmState.is_valid_react_child(child)) {
                    children.push(child);
                }
            });
        } else {
            const child = context.children;
            if (child.length !== 0) {
                children.push(child);
            }
        }
    }

    return children;
}

export default get_children;
