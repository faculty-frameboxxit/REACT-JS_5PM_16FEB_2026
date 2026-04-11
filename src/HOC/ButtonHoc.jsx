import React from "react";

function withMessage(WrappedComponent) {
  function EnhancedComponent() {
    return (
      <div>
        <p>This message is added by HOC</p>
        <WrappedComponent  />
      </div>
    );
  }

  // Helpful for debugging
  // EnhancedComponent.displayName = `withMessage(${WrappedComponent.name})`;

  return EnhancedComponent;
}

export default withMessage;