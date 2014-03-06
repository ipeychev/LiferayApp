YUI.add(
    'pjaxsteroids',
    function(Y) {
        var Lang = Y.Lang,
            YArray = Y.Array;

        var PJAXSteroids = Y.Base.create('PJAXSteroids', Y.Pjax, [], {
            getContent: function (responseText) {
                var content         = {},
                    contentSelector = this.get('contentSelector'),
                    frag            = Y.Node.create(responseText || ''),
                    titleSelector   = this.get('titleSelector'),
                    titleNode;

                if (contentSelector && Lang.isArray(contentSelector)) {
                    content.node = [];

                    YArray.each(contentSelector, function (item, index, collection) {
                        var node = frag ? frag.all(item.selector).toFrag() : frag;

                        content.node.push({
                            srcNode: node,
                            destNode: item.destNode
                        });
                    });

                    if (titleSelector && frag) {
                        titleNode = frag.one(titleSelector);

                        if (titleNode) {
                            content.title = titleNode.get('text');
                        }
                    }
                }
                else {
                    content = PJAXSteroids.superclass.getContent.apply(this, arguments);
                }

                return content;
            },

            _defCompleteFn: function (event) {
                var container,
                    content = event.content;

                if (content.node && Lang.isArray(content.node)) {
                    container = this.get('container');

                    YArray.each(content.node, function (item, index, collection) {
                        var destEl = container.one(item.destNode);

                        destEl.plug(Y.Plugin.ParseContent);
                        destEl.replace(item.srcNode);
                    });

                    if (content.title && Y.config.doc) {
                        Y.config.doc.title = content.title;
                    }
                }
                else {
                    return PJAXSteroids.superclass._defCompleteFn.apply(this, arguments);
                }
            }
        });

        Y.PJAXSteroids = PJAXSteroids;
    },
    '',
    {
        requires: ['pjax', 'aui-parse-content']
    }
);