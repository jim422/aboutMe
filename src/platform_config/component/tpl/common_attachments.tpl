<th data-bind="visible: head_visible">
    <span data-bind="text: friendly_name"></span>：
</th>
<td>
    <div>
        <div>
            <div class="js_upload" data-bind="visible: upload_btn_visible ">
            </div>
            <div class="queueList">
                <ul class="fileList" data-bind="foreach: attachments_list_for_show">
                    <li data-bind="attr: { id: id }">
                        <div class="attachment_spin uk-spinner uk-icon" uk-spinner="ratio: 2" data-bind="visible: $parent.uploading_file_id() === id"></div>

                        <p class="title" data-bind="text: name"></p>
                        <p class="imgWrap">
                            <img data-bind="attr: { src: src }">
                        </p>
                        <p class="progress"><span></span></p>
                        <div class="file-panel trash">
                            <span class="uk-icon" uk-icon="icon: trash" data-bind="click: $parent.deleteFile.bind($data, $parent, $index())"></span>
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