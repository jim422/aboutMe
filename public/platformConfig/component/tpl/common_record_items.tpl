<th>
    <span data-bind="text: friendly_name"></span>:
</th>
<td>
    <table class="record_items" border="1" cellpadding="2" cellspacing="0">
        <thead>
        <tr>
            <th>数据项</th>
            <th>是否需要录入</th>
            <th>必填</th>
        </tr>
        </thead>
        <tbody>
        <!-- ko foreach: record_items -->
        <tr>
            <th data-bind="text: display"></th>
            <td><input type="checkbox" data-bind="checked: needed" class="uk-checkbox"></td>
            <td><input type="checkbox" data-bind="checked: required" class="uk-checkbox"></td>
        </tr>

        <!-- /ko -->
        </tbody>
    </table>
</td>
<td></td>