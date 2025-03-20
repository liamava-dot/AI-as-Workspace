export default {
  pluginsMarket: {
    title: '插件市场',
    manualInstall: '手动安装',
    selectConfig: '选择配置文件',
    importFromClipboard: '从剪贴板导入',
    addMcpPlugin: '添加 MCP 插件',
    rightDrawerTip: '已安装的插件在右侧边栏',
    mcpPluginTip: '可参考 MCP 插件的',
    mcpPluginGuide: '使用指南',
    search: '搜索',
    loadError: '加载插件列表失败',
    retry: '重试'
  },
  assistantView: {
    header: '助手设置',
    assistant: '助手',
    name: '名称',
    avatar: '头像',
    roleSetting: '角色设定',
    promptTemplate: '提示词模板',
    promptVars: '提示词变量',
    promptVarsGuide1: '可参考提示词变量/模板的',
    promptVarsGuide2: '使用指南',
    model: '模型',
    modelEmptyTip: '留空则使用全局模型设置；此设置也会被对话中切换的模型覆盖',
    provider: '服务商',
    providerEmptyTip: '留空则使用全局服务商设置',
    plugins: '插件',
    enable: '启用',
    pluginFunction: '插件功能',
    generateSettings: '生成设置',
    stream: '流式传输',
    maxRetries: '重试次数',
    maxRetriesTip: '生成失败时的最大重试次数',
    maxSteps: '最大调用次数',
    maxStepsTip: '启用工具调用时，单次回复调用模型的最大次数',
    contextNum: '上下文携带条数',
    contextNumTip: '包括当前用户消息的最大上下文数量。留空则不限制',
    promptRole: '提示词角色',
    modelParams: '模型参数',
    temperature: '随机性',
    temperatureTip: '值越大，回复越随机',
    topP: '核采样',
    topPTip: '与随机性类似，但不要和随机性一起更改',
    presencePenalty: '存在惩罚',
    presencePenaltyTip: '值越大，越有可能扩展到新话题',
    frequencyPenalty: '频率惩罚',
    frequencyPenaltyTip: '值越大，越有可能降低重复字词',
    stopSequences: '停止词',
    stopSequencesTip: '当模型生成停止词时，就会停止生成。按回车添加值。',
    maxTokens: '单次回复限制',
    maxTokensTip: '单次生成的最大token数',
    seed: '种子',
    seedTip: '用于随机采样的种子（整数）。用于生成确定性的结果。',
    notAllParamsSupported: '提示：不是所有服务商都支持全部参数',
    metadata: '元数据',
    author: '作者',
    description: '描述',
    homepage: '主页',
    export: '导出',
    exportTip1: '导出助手为 JSON，用于',
    exportTip2: '分享或发布助手',
    exportToFile: '导出为文件',
    exportToClipboard: '导出到剪贴板',
    effectScopeTip: '助手设置的作用域为当前助手，全局的服务商/默认模型设置在',
    settingsPage: '设置页面'
  },
  assistantsMarket: {
    title: '助手市场',
    import: '导入',
    selectFile: '选择文件',
    importFromClipboard: '从剪贴板导入',
    search: '搜索',
    add: '添加',
    addToGlobal: '添加至全局',
    addToWorkspace: '添加至工作区',
    loadError: '加载助手列表失败',
    retry: '重试',
    formatError: '助手数据格式错误',
    addError: '添加失败',
    added: '已添加',
    importError: '导入失败'
  },
  editArtifact: {
    language: '语言',
    edit: '编辑',
    preview: '预览',
    readable: '可读',
    writable: '可写'
  },
  pluginAdjust: {
    infoProvider: '信息提供',
    parameters: '参数',
    enable: '启用',
    toolCall: '工具调用',
    variables: '变量',
    globalSettingsTip: '提示：插件的全局设置在',
    pluginSettings: '插件设置',
    noConfigurableItems: '这个插件没有可配置的项目',
    pluginFunction: '插件功能'
  },
  workspaceIndex: {
    title: '工作区主页'
  },
  workspaceSettings: {
    title: '工作区设置',
    defaultAssistant: '默认助手',
    avatar: '工作区图标',
    homeContent: '主页内容',
    variables: '工作区变量',
    inputPlaceholder: '输入变量内容...'
  },
  pluginSettings: {
    title: '插件设置',
    info: '信息',
    name: '名称',
    description: '描述',
    author: '作者',
    homepage: '主页',
    icon: '图标',
    fileParsing: '文件解析',
    enable: '启用',
    mimeType: 'MIME 类型',
    settings: '设置'
  },
  dialogView: {
    assistantModel: '助手模型',
    globalDefault: '全局默认',
    commonModels: '常用模型',
    modelsConfigGuide1: '可以在',
    modelsConfigGuide2: '中配置 常用模型',
    settings: '设置',
    noobAlert: {
      title: '是否需要新建对话？',
      message: '一个新用户常见的误区是，始终在一个对话中提问，即使问题之间没有关联。\n实际上，当你问一个与前文无关的新问题时，就应该新建一个对话，以避免上下文的累计导致输入开销不断增大',
      okBtn: '我会新建一个对话',
      cancelBtn: '我知道这些，无需提醒'
    },
    errors: {
      setAssistant: '请设置助手',
      configModel: '请配置服务商、模型或者登录',
      loadPluginList: '加载插件列表失败',
      genTitle: '总结对话失败，请检查系统助手设置',
      insufficientQuota: '模型服务额度不足'
    },
    enabledPlugins: '已启用插件',
    messageTokens: '上条消息 Token 消耗',
    tokenPrompt: '提示',
    tokenCompletion: '补全',
    send: '发送',
    chatPlaceholder: '输入聊天内容...',
    recharge: '充值',
    addImage: '添加图片',
    addFile: '添加文件',
    showVars: '显示变量',
    hideVars: '隐藏变量',
    pastedText: '粘贴文本：{text}',
    fileTooLarge: '文件太大（>{maxSize}MB）',
    summarizeFailed: '总结对话失败，请检查系统助手设置',
    convertedToArtifact: '已转为 Artifact',
    callPluginInfoFailed: '调用插件信息失败：{message}',
    pluginPromptParseFailed: '插件「{title}」提示词模板解析失败',
    promptParseFailed: '提示词解析失败，请检查助手提示词模板'
  },
  settingsView: {
    title: '设置',
    defaultProviderHeader: '默认服务商',
    customProvider: '自定义服务商',
    customProviderCaption: '通过创建自定义服务商，你可以混合使用多个服务商的不同模型',
    shareLinkLabel: '分享链接',
    shareLinkCaption: '用于分享你的服务商设置。其他人打开链接后，会自动应用此设置',
    copyLinkLabel: '复制链接',
    noProviderConfigured: '当前未配置默认服务商，将默认使用我们提供的模型服务。详见',
    accountPage: '账号',
    pageSuffix: '页面',
    defaultModelHeader: '默认模型',
    systemAssistantHeader: '系统助手',
    systemAssistantCaption: '用于总结对话标题、提取 Artifacts。如果留空，则使用默认服务商设置',
    featureHeader: '功能',
    operationHeader: '操作',
    autoSummarizeTitle: '自动总结对话标题',
    autoSummarizeCaption: '在第一轮对话结束时，自动总结标题',
    messageSelectionMenu: '消息选中文本菜单',
    messageSelectionCaption: '选中消息文本时，显示操作按钮',
    codePasteOptimize: '代码粘贴优化',
    codePasteCaption: '粘贴从 VSCode 复制的代码时，自动用 markdown 代码块包裹',
    quickScrollButton: '快速滚动按钮',
    quickScrollCaption: '在对话右下角显示快速滚动按钮。关闭后，你仍然可以使用键盘快捷键滚动',
    autoFocusInput: '自动聚焦对话输入框',
    autoLockBottom: '生成时自动锁定底部',
    messageContentCatalog: '消息内容目录',
    messageContentCatalogCaption: '空间足够时，在消息旁边显示目录',
    artifactsSettings: 'Artifacts 设置',
    enableArtifacts: '启用 Artifacts 功能',
    autoExtractArtifact: '自动提取 Artifact',
    autoExtractArtifactCaption: '自动提取助手回答中的 Artifact',
    reserveOriginalArtifact: '提取时保留原文',
    autoNameArtifact: '默认自动命名 Artifact',
    sendKeyShortcut: '发送消息快捷键',
    keyboardShortcuts: '键盘快捷键',
    uiHeader: '界面',
    appearance: '外观',
    themeColor: '主题色',
    userAvatar: '用户头像',
    commonModels: '常用模型',
    commonModelsCaption: '用于在对话中快速切换模型。',
    showWarnings: '显示警告',
    showWarningsCaption: '显示响应中的警告信息',
    markdownRendering: 'Markdown 渲染',
    theme: '主题',
    codeTheme: '代码主题',
    disableMermaid: '禁用 Mermaid',
    codeAutoFoldThreshold: '代码自动折叠阈值',
    codeAutoFoldThresholdCaption: '代码块超过此行数后，自动折叠。默认不折叠',
    dataHeader: '数据',
    userData: '用户数据',
    export: '导出',
    import: '导入',
    restoreDefaultSettings: '恢复默认设置',
    restoreSettingsConfirmation: '确定将所有设置恢复默认？',
    followSystem: '跟随系统',
    light: '浅色',
    dark: '深色',
    exportFailed: '导出失败',
    auto: '自动',
    language: '语言'
  },
  customProvider: {
    title: '编辑服务商',
    name: '名称',
    icon: '图标',
    fallbackProvider: '回落服务商',
    fallbackProviderCaption: '当使用的模型不匹配所有子服务商的模型时，则会使用回落服务商',
    subproviders: '子服务商',
    addSubprovider: '添加子服务商',
    removeSubprovider: '删除子服务商'
  }
}
