export default function doPlop(plop) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const transformName = (str) => {
    return str.replace(/ /g, '-');
  };

  const transformFileTxtName = (str) => {
    return str.replace(/txt/g, 'tsx');
  };

  const transformComponentName = (str, replaceStr) => {
    return str.replace(`component`, replaceStr);
  };

  const transformComponentFileName = (componentFileName, componentName) => {
    return transformComponentName(
      transformFileTxtName(componentFileName),
      componentName
    );
  };

  plop.setGenerator('ui-components', {
    description: 'new ui component in repo',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name: ',
      },
      {
        type: 'input',
        name: 'layerFolder',
        message: 'Layer Folder Name: ',
      },
    ],
    actions: (data) => {
      const templateDir = 'plop-templates';
      const componentName = transformName(data.componentName);
      const componentFolder = data.componentFolder;
      const layerFolder = data.layerFolder;

      const componentDir = `packages/web/ui/src/${componentName}`;
      const layerDir = `packages/web/ui/src/${layerFolder}`;
      const filesToAlwaysCopyOver = [
        // 'component.spec.txt',
        'component.stories.txt',
        'component.txt',
      ];
      const actions = [];

      // Copy over basic files
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'add',
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentName
          )}`,
          templateFile: `${templateDir}/ui-components/${file}`,
        });
      });

      // Modify component*.tsx
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentName
          )}`,
          pattern: /(-- PLOP COMPONENT NAME HERE --)/gi,
          template: `${capitalizeFirstLetter(componentName)}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentName
          )}`,
          pattern: /(-- PLOP COMPONENT FOLDER NAME HERE --)/gi,
          template: `${componentName}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentName
          )}`,
          pattern: /(-- PLOP LAYER FOLDER HERE --)/gi,
          template: `${layerFolder}`,
        });
      });

      return [
        ...actions,
        {
          type: 'append',
          path: `${layerDir}/index.tsx`,
          template: `export * from './${componentName}/${componentName}';`,
        },
      ];
    },
  });
}
