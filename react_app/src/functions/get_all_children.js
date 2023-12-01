import React from "react";
import { get_children } from "functions";

function get_all_children(component, parentFunctions, formState) {
    const context = component.props;
    const topChildren = get_children(context);
    const components = [];

    Object.keys(topChildren).forEach((index) => {
        const childComponent = topChildren[index];
        const { _children } = childComponent.props;

        let dataMapping = parentFunctions;
        if (formState) {
            dataMapping = getFormProps(
                formState,
                childComponent,
                dataMapping,
                index,
                component.props.autoFocus
            );
        }
        dataMapping.children = get_all_children(childComponent, formState);

        const componentInstance = React.cloneElement(childComponent, dataMapping);
        components.push(componentInstance);
    });

    return components;
}

function getFormProps(state, component, data, index, autoFocus) {
    if (component.props) {
        const value = state[component.props.name];

        data.value = value;
        if (index === 0 && autoFocus) {
            data.autoFocus = true;
        }
    }

    return data;
}

export default get_all_children;
