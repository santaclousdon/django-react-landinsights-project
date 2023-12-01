export default function is_valid_react_child(child) {
    if (child != null && typeof child === "object" && String(child.$$typeof) === "Symbol(react.element)") {
        return true;
    }

    return false;
}
