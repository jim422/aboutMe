<th>
    <span data-bind="text: friendly_name"></span>:
</th>
<td>
    <input type="number" data-bind="value: value, attr: { max: max, min: min }, event: { blur: validate}" class="form-control">
    <p class="validateItem">
        <label class="validateLabel" data-bind="text: validate_tip" style="color:#ff0000"></label>
    </p>
</td>
<td></td>