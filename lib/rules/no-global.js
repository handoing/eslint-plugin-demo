const restrictedGlobalMessages = {
  'xxx': '禁止使用xxx，给我删掉。'
};

module.exports = {
  create: function(context) {

    function reportReference(reference) {
      const name = reference.identifier.name;
      const message = restrictedGlobalMessages[name];

      context.report({
        node: reference.identifier,
        message
      });
    }

    function isRestricted(name) {
      return Object.prototype.hasOwnProperty.call(restrictedGlobalMessages, name);
    }

    return {
      Program() {
        const scope = context.getScope();
        scope.variables.forEach(variable => {
          if (!variable.defs.length && isRestricted(variable.name)) {
            variable.references.forEach(reportReference);
          }
        });
        scope.through.forEach(reference => {
          if (isRestricted(reference.identifier.name)) {
            reportReference(reference);
          }
        });
      }
    }
  }
};
