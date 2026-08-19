async function applyCodeSyntax() {
  const variables = await figma.variables.getLocalVariablesAsync();
  let webCount = 0;
  let iosCount = 0;

  for (const variable of variables) {
    if (variable.name.startsWith("--")) {
      variable.setVariableCodeSyntax("WEB", `var(${variable.name})`);
      webCount += 1;
    } else {
      variable.setVariableCodeSyntax("iOS", `PepperoniTokens.${variable.name}`);
      iosCount += 1;
    }
  }

  figma.closePlugin(
    `Code syntax applied: ${webCount} Web, ${iosCount} iOS variables.`
  );
}

applyCodeSyntax().catch((error) => {
  figma.closePlugin(`Unable to apply code syntax: ${error.message}`);
});
