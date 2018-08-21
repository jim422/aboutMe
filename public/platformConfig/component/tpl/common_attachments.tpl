<th data-bind="visible: head_visible">
    <span data-bind="text: friendly_name"></span>：
</th>
<td>
    <div>
        <div data-bind="visible: readonly == false">
            <div class="js_upload">
            </div>
            <div class="queueList">
                <ul class="fileList" data-bind="foreach: attachments_list_for_show">
                    <li data-bind="attr: { id: id }" style="position: relative">
                        <p class="title" data-bind="text: name"></p>
                        <p class="imgWrap">
                            <img data-bind="attr: { src: src }">
                        </p>
                        <p class="progress"><span></span></p>
                        <div class="file-panel">
                            <div class="cancel">删除</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <p class="validateItem">
        <label class="validateLabel" data-bind="text: validate_tip" style="color:#ff0000"></label>
    </p>
    <div data-bind="visible: content_tip, text: content_tip"></div>

</td>