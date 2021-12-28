$('#btnTst').click(async function () {
    const rules = await chrome.declarativeNetRequest.getDynamicRules();
    // id > 1
    await chrome.declarativeNetRequest.updateDynamicRules(
        {
            addRules: [
                {
                    id: rules.length + 1,
                    priority: 1,
                    action: {"type": "block"},
                    condition: {
                        urlFilter: "|*chandika*|", resourceTypes: ["sub_frame", "main_frame"]
                    }
                }
            ]
        }
    );
});

$('#btnReset').click(async function () {
    const rules = (await chrome.declarativeNetRequest.getDynamicRules()).map(v => v.id);
    try {
        alert(rules)
    } catch (e) {
    }
    try {
        chrome.declarativeNetRequest.updateDynamicRules(
            {
                removeRuleIds: rules
            }
        );
    } catch (e) {
        console.trace(e);
    }
});
